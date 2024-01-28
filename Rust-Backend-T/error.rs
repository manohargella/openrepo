use warp::{Filter, Rejection, Reply};

async fn handle_error(rejection: Rejection) -> Result<impl Reply, Rejection> {
    Ok(warp::reply::html(format!("Error: {:?}", rejection)))
}

#[tokio::main]
async fn main() {
    let error_handling = warp::path!("error")
        .and_then(|| async { Err(warp::reject::custom("Custom Error")) })
        .recover(handle_error);

    warp::serve(error_handling)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
