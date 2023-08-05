import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormCreateNewStandard from '../components/FormCreateNewStandard'
import '../components/css/CreateNewStandard.css';

function CreateNewStandard() {
  return (
    <section>
        <Header />
        <FormCreateNewStandard />
        <Footer />
    </section>
  )
}

export default CreateNewStandard