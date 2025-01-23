import "./loadingview.scss"


const LoadingView = () => {

  return (
    <div className="loading-view-conteiner">
      <div className="load-icon"><i class="fas fa-spinner fa-spin"></i></div>
      <p>Cargando Productos...</p>
    </div>
  )
}

export default LoadingView
