use warp::{Filter, Reply};

#[derive(Debug, serde::Deserialize)]
struct UserData {
    username: String,
    email: String,
}

#[tokio::main]
async fn main() {
    let json_api = warp::path!("api" / "user")
        .and(warp::post())
        .and(warp::body::json())
        .map(|user_data: UserData| {
            warp::reply::json(&user_data)
        });

    warp::serve(json_api)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
