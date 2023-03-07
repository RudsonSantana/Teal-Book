import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import AtualizaPerfil from '../../components/FormularioAtualizaPerfil/AtualizaPerfil'

 function AttProfile() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <section>
        <AtualizaPerfil />
      </section>
      <Footer />
    </div>
  )
}
export default AttProfile