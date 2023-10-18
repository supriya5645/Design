import React from 'react';
import Sidebar from './Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import { WalletIcon } from '@heroicons/react/24/outline';
import BarChart from './BarChart';
import { PieChart } from './PieChart';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import Footer from './Footer';



function Dashboard() {
	return (
		<>
			<div className='cover'>
				{/* //Sidebar */}
				<Sidebar />
				<div className='dashboard'>

					{/* //Cards */}
					<div className='main-container'>
						<div className='container'>
							<div className='dollar-container'>
								<img
									src='data:image/jpeg;base64,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'
									alt='icon'
								/>
							</div>
							<div className='container-1'>
								<p>Earing</p>
								<span>$188</span>
								<p>
									{' '}
									<FontAwesomeIcon icon={faArrowUp} />
									37.8%
								</p>
							</div>
						</div>
						<div className='container'>
							<div className='dollar-container'>
								<img
									src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAY1BMVEX///8AAAC8vLxCQkLm5ub7+/t+fn7GxsZQUFB7e3tLS0va2tqdnZ12dnY+Pj64uLiMjIyqqqpsbGzz8/PQ0NAQEBCFhYVjY2OSkpLt7e0kJCSwsLA3NzekpKReXl4YGBgrKyvb/bGNAAADUUlEQVR4nO3c23qqMBAGUCJRhCioIIKg+P5PuROscthiksmo/ez8N71owVUbJgeTeh6F8gUpi9AlCxxFumOOiVIExrx2ZTB2nrs7Qnmf+jSDJji3EGeGkHcpXG6waN+Rg6sjd/1lpKORkNDRsWRs6+oozu4Q6QjU19LBsVJ3YTnYkArBo6vjdNwB23zraB86aDPbxtenTjpSyckcHF55ZO1X+6Tx7elXDt/R4aU1ECJfmR2jZdM65mtWcyeHV+4ZpMlX8qoFv7fTNBEwxt3hCQWpLK9WDaLtn27PCzh3hydUG5nZXc1l9RF9RwntIjpHW5stIdLhz3uO6hi6PLc/CRTEqr2PHOrhcXtegJCxo6sfurdl/P2Bwxoy5eDhTpfFsAsIh4V0Kx2NeQmYcGQmo5794GXUC29FdovI1Y8YQyYcZkPEQUdSqkK676IGAaw2HSlOOGSRLTTjL0ldD24VPKKaviHTDl1Vy8cOr1xE/iD7zzjk5cP4n3IMMycHOf6MQ9dJbV7jiMaOXbF5mug1jqA+pJ0jN+pfNKNhkOM6nrg52mmILrrlDpjD6zvkAHFTPM9GOwBFcSDkCxzz82iU9SGHl66g8zlcB2ZgDo6x6Oju2DY+eCkI0xG5zrORHM7zfXKQgxzk+FWOtNo+zSkx6BwRHPp1GIOFWgSHr3UYfKiA4Cg1k5fN6j1/F5SQgxzkeKuDL4AJe3UWwRFr6+lkuru8pX+ZStPNSzH621kCTG+14IvaKTnIQQ5zB8+hdT1BdSzhdb0rZAiOA9yBWtfL0woYquvkIMdfd2RRDEuddwsBb1n/mAzqeH39S+q6lwXA9D48+aJ2Sg5ykMPcwdfQnFAdDmdQUOt6CGYckddhoOltU/iidkoOcpCDHFYOyyMrekcMcBxcDpw9jmgAjkp2UWg76a6RneXS+lxBepGdZYa4h4yrA5fGx6S6fWwz1WvHEVZ8tYM1Mld3+/pW8LHPRGLzt7e/v1A4zGofKWwO0Q33OXKBEtnmL1xYtbWX7LfMGKstL5GOC/b+RlUDYstLyov9GURtdj9nFG2i2iZy/VIntqz7iFI17XUCHp//l0rNfXb2+gr1Yb0mgjS5YI/NOAO7hyR3+r8OoxTIzY1C+Uj+AaPAWeQCtNdlAAAAAElFTkSuQmCC'
									alt='icon'
								/>
							</div>
							<div className='container-1'>
								<p>Orders</p>
								<span>$2.k</span>
								<p>
									{' '}
									<FontAwesomeIcon icon={faArrowDown} />
									37.8%
								</p>
							</div>
						</div>
						<div className='container'>
							<div className='dollar-container'>
								<img
									src='https://cdn-icons-gif.flaticon.com/12317/12317796.gif'
									alt='icon'
								/>
							</div>
							<div className='container-1'>
								<p>Ballance</p>
								<span>$2.4k</span>
								<p>
									{' '}
									<FontAwesomeIcon icon={faArrowDown} />
									37.8%
								</p>
							</div>
						</div>
						<div className='container'>
							<div className='dollar-container'>
								<WalletIcon width={70} />
							</div>
							<div className='container-1'>
								<p>Total sales</p>
								<span>$89k</span>
								<p>
									{' '}
									<FontAwesomeIcon icon={faArrowDown} />
									37.8%
								</p>
							</div>
						</div>
					</div>
					{/* // Barchart */}
					<div className='graphs-container'>
						<BarChart />
						<PieChart />
					</div>
					<hr />
					<div className='header'>
						<div className='right-corner'>
							<h4>Product Sell</h4>
							<SearchBar className='search-bar-input' />
							<Dropdown />
						</div>
					</div>
					<div className='footer'>
					<Footer/>

				</div>
					

				</div>
				
			
			</div>
		</>
	);
}

export default Dashboard;
