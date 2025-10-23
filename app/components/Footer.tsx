const Footer = () => {
    return (
        <div className='px-5 py-4 flex justify-between'>
            <div>© {new Date().getFullYear()} Juan Miguel Sanchez</div>
            <div className='group relative'>
                <div className='absolute right-0 translate-x-0 group-hover:-translate-y-5 md:group-hover:translate-y-0 md:group-hover:translate-x-[-397px] transition-transform duration-400 ease-in-out'>
                    Attribution
                    <span className='invisible group-hover:visible'>:</span>
                </div>

                <div className='invisible text-right md:text-left group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-600'>
                    Paper images by{" "}
                    <a
                        href='https://www.freepik.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline'
                    >
                        FreePik
                    </a>
                    . Nacelle font by Sora Sagano.
                </div>
            </div>
        </div>
    );
};
export default Footer;
