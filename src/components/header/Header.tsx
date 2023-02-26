import {FC} from 'react';
import {Link} from 'react-router-dom';


export const Header: FC = () => {


    return (
        <header>
            <nav className="px-2 py-4">

                <div className="flex justify-between items-center">
                    <Link
                        to="/"
                        className="font-titillilum text-2xl mr-8 text-conduit-green"
                    >
                        conduit
                    </Link>

                    <ul className="pl-0 mb-0 list-none flex">
                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};