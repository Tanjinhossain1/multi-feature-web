import Image from "next/image";
import styles from "./page.module.css";
import TopNavigation from "@/Components/TopBar";
import BlogParent from "@/Components/BlogParent";

export default function Home() {
  return (
    <main style={{width:"100%"}} >
      
    <TopNavigation />
       <BlogParent />
    </main>
  );
}
