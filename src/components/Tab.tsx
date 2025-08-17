import  TabItem  from './TabItem';

const Tab = () => {
  return (
	<div className='flex w-screen p-5 justify-center items-center '>

    <div className='flex align-middle justify-center bg-blue-50 rounded-3xl inset-shadow-sm'>
		<TabItem name='Keys Formatter' />
		<TabItem name='JSON Formatter' />
    </div>
	</div>
  );
};

export default Tab;
