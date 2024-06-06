// main.rs
use hyper::{Body, Request, Response, Server};
use hyper::service::{make_service_fn, service_fn};

async fn handle_request(req: Request<Body>) -> Result<Response<Body>, hyper::Error> {
    // Handle your request logic here
    let response_body = Body::from("Hello, Rust Web Server!");

    Ok(Response::new(response_body))
}

#[tokio::main]
async fn main() {
    // Create a service to handle requests
    let make_svc = make_service_fn(|_conn| {
        // This is the service that will handle each connection
        async { Ok::<_, hyper::Error>(service_fn(handle_request)) }
    });

    // Create a server that binds to 127.0.0.1:8080
    let addr = ([127, 0, 0, 1], 8080).into();
    let server = Server::bind(&addr).serve(make_svc);

    println!("Server listening on http://{}", addr);

    // Start the server
    if let Err(e) = server.await {
        eprintln!("Server error: {}", e);
    }
}
