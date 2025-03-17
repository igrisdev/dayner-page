export const ButtonBuy = ({ text = 'Comprar Ahora', styles = '' }) => {
  const style =
    'bg-blue-900 text-white px-10 py-3 rounded-sm cursor-pointer ' + styles

  return <button className={style}>{text}</button>
}
