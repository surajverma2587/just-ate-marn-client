import ErrorCard from "../../components/ErrorCard";
import MainContainer from "../../components/MainContainer";

const InvalidPage = () => {
  return (
    <MainContainer>
      <ErrorCard
        headerTitle="Invalid Page"
        title="Page does not exist"
        message="This page does not exist. Please go back."
        goBack
      />
    </MainContainer>
  );
};

export default InvalidPage;
