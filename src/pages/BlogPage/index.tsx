import Header from "../../components/Header";
import Banner from "../../components/Banner";
import b from "../../components/contactUs";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import Truck from "../../assets/banner/Photo.svg";
const BlogPage = () => {
    return (
      <>
       <PageContainer bannerImage={Truck}>
        <Contact/>
      </PageContainer>
        
      </>
    );
  };
  
  export default BlogPage;