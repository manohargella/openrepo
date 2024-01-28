use warp::Filter;

#[tokio::main]
async fn main() {
    let upload_route = warp::path!("upload")
        .and(warp::post())
        .and(warp::multipart::form().max_length(5 * 1024 * 1024)) // Set max file size to 5MB
        .map(|form| {
            // File upload handling logic goes here
            // For simplicity, we'll just return a success response
            warp::reply::html("File uploaded successfully")
        });

    warp::serve(upload_route)
        .run(([127, 0, 0, 1], 3030))
        .await;
}
