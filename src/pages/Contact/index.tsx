import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Contact from "../../components/contactUs";
import Footer from "../../components/Footer";
import PageContainer from "../../components/PageContainer";
import Truck from "../../assets/banner/Photo.svg";
const ContactPage = () => {
    return (
      <>
       <PageContainer bannerImage={Truck}>
        <Contact/>
      </PageContainer>
        
      </>
    );
  };
  
  export default ContactPage;