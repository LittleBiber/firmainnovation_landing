export const FIGLogo = (props: React.SVGProps<SVGSVGElement>) => {
    //* fill value is currnet, image will be transparent at first

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="44" viewBox="0 0 48 44" fill="none" {...props}>
            <path
                d="M-0.000976562 32.4943H4.22942V21.6241H12.4071V18.3708H4.22942V10.8927H12.9012V7.50058H-0.000976562V32.4943Z"
                fill="current"
            />
            <path d="M22.0116 17.4992H17.7812V42.4985H22.0116V17.4992Z" fill="current" />
            <path
                d="M39.0832 26.1876C42.7529 26.1876 45.9729 25.4548 47.9992 24.7164V13.9128H43.841V22.2681C42.8639 22.5846 40.6932 22.8288 39.0887 22.8288C33.7425 22.8288 30.4892 18.4597 30.4892 13.1078C30.4892 7.75597 33.7425 3.45895 39.0887 3.45895C43.0416 3.45895 45.24 4.23064 46.85 4.82467V1.43258C45.2733 0.699759 42.7529 0.000244141 39.0832 0.000244141C31.8105 0.000244141 26.3198 5.87395 26.3198 13.1078C26.3254 20.3805 31.8105 26.1876 39.0832 26.1876Z"
                fill="current"
            />
        </svg>
    );
};

export const Launch = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" strokeWidth={2} {...props}>
            <path
                d="M5.31687 16.067C5.0725 16.3113 4.6775 16.3113 4.43312 16.067C4.18875 15.8226 4.18875 15.4276 4.43312 15.1832L14.6162 5.00009L8 5.00009C7.655 5.00009 7.375 4.72009 7.375 4.37509C7.375 4.03009 7.655 3.75009 8 3.75009L16.125 3.75009C16.4669 3.75009 16.75 4.03071 16.75 4.37509L16.75 12.5001C16.75 12.8451 16.47 13.1251 16.125 13.1251C15.78 13.1251 15.5 12.8451 15.5 12.5001L15.5 5.88384L5.31687 16.067Z"
                fill="current"
                stroke="current"
                strokeWidth="1"
            />
        </svg>
    );
};

export const LeftArrowLong = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" {...props}>
            <path
                d="M25.2071 8.20711C25.5976 7.81658 25.5976 7.18342 25.2071 6.7929L18.8431 0.428934C18.4526 0.0384094 17.8195 0.0384093 17.4289 0.428934C17.0384 0.819458 17.0384 1.45262 17.4289 1.84315L23.0858 7.5L17.4289 13.1569C17.0384 13.5474 17.0384 14.1805 17.4289 14.5711C17.8195 14.9616 18.4526 14.9616 18.8431 14.5711L25.2071 8.20711ZM0.5 8.5L24.5 8.5L24.5 6.5L0.5 6.5L0.5 8.5Z"
                fill="current"
            />
        </svg>
    );
};

export const DownArrowSmall = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" {...props}>
            <path
                d="M12.8333 1.08325L7 6.91659L1.16667 1.08325"
                stroke="current"
                stroke-opacity="0.5"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export const Hamburger = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <g clip-path="url(#clip0_801_858)">
                <path d="M2 20V17.9344H22V20H2ZM2 13.0328V10.9672H22V13.0328H2ZM2 6.06555V4H22V6.06555H2Z" fill="current" />
            </g>
            <defs>
                <clipPath id="clip0_801_858">
                    <rect width="24" height="24" fill="current" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const Close = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
            <path d="M5.6 20L4 18.4L10.4 12L4 5.6L5.6 4L12 10.4L18.4 4L20 5.6L13.6 12L20 18.4L18.4 20L12 13.6L5.6 20Z" fill="current" />
        </svg>
    );
};
