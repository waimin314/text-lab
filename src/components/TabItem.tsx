
const TabItem = (props: { name: string }) => {
  return (
    <button className='p-2 m-1 font-medium tracking-wide text-black capitalize transition-colors duration-300 transform rounded-3xl hover:bg-purple-400 focus:bg-purple-500 focus:text-white'>{props.name}</button>
  )
}

export default TabItem