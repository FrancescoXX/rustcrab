use std::io::{Read, Write};
use std::net::{TcpListener, TcpStream};

fn main() {
    let listener = TcpListener::bind("127.0.0.1:3000").unwrap();
    println!("Server listening on port 3000...");

    for stream in listener.incoming() {
        handle_client(stream.unwrap());
    }
}

fn handle_client(mut stream: TcpStream) {
    stream.read(&mut [0; 1024]).unwrap();
    stream.write("HTTP/1.1 200 OK\r\n\r\nHello, World!".as_bytes()).unwrap();
}
