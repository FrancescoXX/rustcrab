export interface Books {
    title: string;
    author: string;
    description: string;
    cover: string;
    link: string; 
  }
  
export const books: Array<Books> = [
    {
      title: "The Rust Programming Language",
      author: "Steve Klabnik and Carol Nichols",
      description: "An introductory book to Rust, covering the language from basics to advanced topics.",
      cover: "/covers/rust_book_01.jpg",
      link: "https://doc.rust-lang.org/book/",
    },
    {
      title: "Programming Rust: Fast, Safe Systems Development",
      author: "Jim Blandy and Jason Orendorff",
      description: "A comprehensive guide to Rust programming focusing on systems-level programming.",
      cover: "/covers/rust_book_02.jpg",
      link: "https://www.oreilly.com/library/view/programming-rust/9781491927274/",
    },
    {
      title: "Rust Programming By Example",
      author: "Guillaume Gomez and Antoni Boucher",
      description: "Learn Rust by building practical applications and solving real-world problems.",
      cover: "/covers/rust_book_03.jpg",
      link: "https://www.packtpub.com/product/rust-programming-by-example/9781788390637",
    },
    {
        title: "Rust in Action",
        author: "Tim McNamara",
        description: "A hands-on guide to systems programming with Rust, filled with practical examples.",
        cover: "/covers/rust_book_04.jpg",
        link: "https://www.manning.com/books/rust-in-action",
      },
      {
        title: "Mastering Rust",
        author: "Vesa Kaihlavirta",
        description: "A book for advanced Rust programmers to deepen their knowledge and master the language.",
        cover: "/covers/rust_book_05.jpg",
        link: "https://www.packtpub.com/product/mastering-rust/9781788993050",
      },
  ];