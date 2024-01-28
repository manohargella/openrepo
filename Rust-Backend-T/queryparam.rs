use warp::{Filter, Rejection};

#[tokio::main]
async fn main() {
    let query_param = warp::path!("hello")
        .and(warp::query::<Vec<(String, String)>>())
        .map(|params: Vec<(String, String)>| {
            format!("Hello, {:?}", params)
        });

    warp::serve(query_param)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
