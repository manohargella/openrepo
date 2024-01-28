use warp::Filter;

#[tokio::main]
async fn main() {
    // Define a simple route to respond with "Hello, World!"
    let hello = warp::path!("hello" / "world")
        .map(|| warp::reply::html("Hello, World!"));

    // Start the warp server on http://127.0.0.1:3030/hello/world
    warp::serve(hello)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
