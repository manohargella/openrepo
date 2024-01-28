use tokio::sync::broadcast;
use warp::Filter;

#[tokio::main]
async fn main() {
    let (tx, _) = broadcast::channel::<String>(10);

    let ws_route = warp::path("ws")
        .and(warp::ws())
        .map(move |ws: warp::ws::Ws| {
            let tx = tx.clone();
            ws.on_upgrade(|websocket| handle_websocket(websocket, tx))
        });

    warp::serve(ws_route)
        .run(([127, 0, 0, 1], 3030))
        .await;
}

async fn handle_websocket(ws: warp::ws::WebSocket, tx: broadcast::Sender<String>) {
    // WebSocket handling logic goes here
    // For simplicity, we'll just broadcast received messages
    let (tx, _) = tx.subscribe();
    tokio::spawn(async move {
        while let Ok(message) = tx.recv().await {
            ws.send(warp::ws::Message::text(message)).await.ok();
        }
    });
}
