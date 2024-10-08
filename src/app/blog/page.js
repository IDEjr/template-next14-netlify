import MenuBlog from "@/components/menuBlog";
import CarrosselBlog from "@/components/carrosselBlog";
import { handleJSONfiles } from "@/utils/jsonHandler";
import { handleJSONfile } from "@/utils/jsonHandler";

export default function Blog() {
  const posts = handleJSONfiles("./content/posts");
  const blog = handleJSONfile(`./content/paginas/blog.json`);
  const generos = handleJSONfiles(`./content/generos`);

  return (
    <>
      <CarrosselBlog posts={posts} titulo={blog.inicioBlog.titulo} />
      <MenuBlog posts={posts} generos={generos} />
    </>
  );
}

// export async function getStaticProps() {

//   const posts = handleJSONfiles('./content/posts');
//   const nav = handleJSONfile('./content/navFooter/navbar.json');
//   const foo = handleJSONfile('./content/navFooter/footer.json');
//   const blog = handleJSONfile(`./content/paginas/blog.json`);
//   const contato = handleJSONfile(`./content/contato/contato.json`);
//   const generos = handleJSONfiles(`./content/generos`);

//   return {
//     props: { posts, nav, foo, blog, contato, generos },
//   };
// }
