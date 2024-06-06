use warp::{Filter, Reply};

async fn logger_middleware(req: warp::Rejection) -> Result<impl Reply, warp::Rejection> {
    println!("Request rejected: {:?}", req);
    Err(req)
}

#[tokio::main]
async fn main() {
    let middleware_example = warp::path!("middleware" / "example")
        .and_then(|| async { Ok(warp::reply::html("Middleware Example")) })
        .recover(logger_middleware);

    warp::serve(middleware_example)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
