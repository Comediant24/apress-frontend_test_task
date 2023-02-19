import TopTable from "./TopTable";
import { requestProducts } from "../../stores/reducers/topTable-reducer";
import { useEffect, useState } from "react";
import { connect } from "react-redux";


const html = document.querySelector("html");
const body = document.querySelector("body");

const TopTableContainer = ({topTable, requestProducts}) => {

  const [displayModal, setDisplayModal] = useState(true);
  const [dataForModal, setDataForModal] = useState({});

  useEffect(() => {
    requestProducts();
  }, []);

  const openModal = (nameProduct) => {
    setDisplayModal(false);

    const productForModal = topTable.products.find(({name}) => name === nameProduct);
    setDataForModal(productForModal);
      
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
  };

  const hideModal = () => {
    setDisplayModal(true);

    html.style.overflow = "visible";
    body.style.overflow = "visible";
  };

  return <TopTable topTable={topTable} displayModal={displayModal} 
    dataForModal={dataForModal} openModal={openModal} 
    hideModal={hideModal} />    
};


const mapStateToProps = (state) => {
  return {
    topTable: state.topTable
  }
};

export default connect(mapStateToProps, {requestProducts}) (TopTableContainer);