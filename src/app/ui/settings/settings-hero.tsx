import {FaRegUser} from 'react-icons/fa'
const SettingsHero = () => {
    return (
      <div className="flex items-center bg-white p-3">
        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
          <FaRegUser className="h-10 w-10" />
        </div>
        <div className="ml-4">
          <h2>Aborisade Ayomiposi</h2>
          <h3>Boxes</h3>
        </div>
        <div className='ml-auto'>
            <h1>Wallet</h1>
            <p>$0</p>
        </div>
      </div>
    );
}
export default SettingsHero