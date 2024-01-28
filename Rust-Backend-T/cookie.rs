use warp::{Filter, Reply};

#[tokio::main]
async fn main() {
    let session_example = warp::path!("session" / "example")
        .map(|| {
            // Set a cookie in the response
            warp::reply::html("Session Example").cookie("user_id", "123")
        });

    warp::serve(session_example)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
