use juniper_warp::make_graphql_filter;
use warp::Filter;

// Define your GraphQL schema here
struct Query;

#[juniper::graphql_object]
impl Query {
    fn hello() -> &'static str {
        "Hello, GraphQL!"
    }
}

// Create a warp filter for GraphQL
fn graphql_filter() -> warp::filters::BoxedFilter<(impl warp::Reply,)> {
    let schema = juniper::RootNode::new(Query, juniper::EmptyMutation::<()>::new());

    make_graphql_filter(schema, warp::any())
        .boxed()
}

#[tokio::main]
async fn main() {
    let graphql_route = warp::path!("graphql").and(graphql_filter());

    warp::serve(graphql_route)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
