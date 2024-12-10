export {};

// import { useState } from 'react';
// import styled from 'styled-components';

// import { AsIsGridData, ToBeGridData } from '../../@types';
// import Colors from '../../theme/color';

// const BoxBase = styled.div`
//     display: flex;
//     width: 344px;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     align-self: stretch;
//     border-radius: 12px;
// `;

// const AsIsContent = styled(BoxBase)`
//     padding: 24px;
//     gap: 12px;

//     border: 1px solid rgba(117, 112, 114, 0.5);
//     background: rgba(35, 31, 32, 0.6);

//     img {
//         width: 40px;
//         aspect-ration: 1/1;
//     }

//     .title-box {
//         width: 100%;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//         gap: 6px;
//     }

//     .title {
//         color: ${Colors.gray[700]};

//         /* KR/Body/K) Body1 - Bd */
//         // font-family: Pretendard;
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 800;
//         line-height: 24px; /* 150% */
//     }

//     .tag-box {
//         display: flex;
//         align-items: flex-start;
//         gap: 8px;
//         width: 100%;
//     }

//     .tag {
//         padding: 6px 12px;
//         border-radius: 40px;
//         background: rgba(117, 112, 114, 0.3);

//         color: ${Colors.gray[400]};
//         text-align: center;

//         /* KR/Body/K) Body4 - Rg */
//         // font-family: Pretendard;
//         font-size: 12px;
//         font-style: normal;
//         font-weight: 400;
//         line-height: normal;
//     }
// `;

// const ToBeContent = styled(BoxBase)`
//     height: 376px;
//     padding: 0px 20px;
//     gap: 24px;

//     border: 1px solid rgba(246, 138, 88, 0.4);
//     background: ${Colors.gray[100]};
//     box-shadow:
//         0px 2px 12px 0px rgba(0, 0, 0, 0.2),
//         0px -4px 8px 0px rgba(0, 0, 0, 0.25) inset;

//     img {
//         width: 160px;
//         aspect-ration: 1/1;
//     }

//     .title {
//         color: ${Colors.white};

//         text-align: center;

//         /* KR/Body/K) Body1 - Bd */
//         // font-family: Pretendard;
//         font-size: 16px;
//         font-style: normal;
//         font-weight: 800;
//         line-height: 24px; /* 150% */
//     }
// `;

// const ToBeDetailContent = styled.div`
//     display: flex;
//     width: 344px;
//     height: 376px;
//     padding: 24px 28px;
//     flex-direction: column;
//     align-items: flex-start;
//     gap: 16px;

//     border-radius: 12px;
//     border: 1px solid rgba(246, 138, 88, 0.4);
//     background: radial-gradient(85.91% 150.13% at 50% -23.31%, rgba(35, 31, 32, 0.4) 65%, rgba(241, 86, 35, 0.4) 100%);
//     box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.05);
// `;

// const ToBeDetailCardTitle = styled.div`
//     display: flex;
//     padding: 12px 24px;
//     justify-content: center;
//     align-items: center;
//     gap: 16px;
//     align-self: stretch;

//     border-radius: 12px;
//     border: 1px solid var(--Orange-400, #f68a58);
//     background: rgba(246, 138, 88, 0.1);

//     color: ${Colors.white};

//     /* EN/Body/E) Body1 - Bd */
//     font-size: 16px;
//     font-weight: 900;
//     line-height: 24px; /* 150% */
// `;

// const ToBeDetailBox = styled.div`
//     display: flex;
//     gap: 2px;

//     flex-direction: column;

//     .title {
//         color: var(--Orange-400, #f68a58);

//         /* KR/Body/K) Body2 - Md */
//         font-size: 14px;
//         font-weight: 600;
//         line-height: 19px; /* 135.714% */
//     }

//     .desc {
//         color: ${Colors.white};
//         /* KR/Body/K) Body2 - Rg */
//         font-size: 14px;
//         font-weight: 400;
//         line-height: 20px; /* 142.857% */
//     }
// `;

// const AsIs = (data: AsIsGridData) => {
//     return (
//         <AsIsContent>
//             <div className="title-box">
//                 <img src={data.img} alt={data.img} />
//                 <div className="title">{data.title}</div>
//             </div>
//             <div className="tag-box">
//                 {data.tags.map((tag: string, key) => (
//                     <div className="tag" key={`${data.title}_${key}`}>
//                         {tag}
//                     </div>
//                 ))}
//             </div>
//         </AsIsContent>
//     );
// };

// const ToBe = (data: ToBeGridData) => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
//             {open ? (
//                 <ToBeDetailContent>
//                     <ToBeDetailCardTitle>{data.title}</ToBeDetailCardTitle>

//                     {data.detail.map((detail, index) => (
//                         <ToBeDetailBox key={detail.title}>
//                             <div className="title">{detail.title}</div>
//                             <div className="desc">{detail.desc}</div>
//                         </ToBeDetailBox>
//                     ))}
//                 </ToBeDetailContent>
//             ) : (
//                 <ToBeContent>
//                     <img src={data.img} alt={data.img} />
//                     <div className="title">{data.title}</div>
//                 </ToBeContent>
//             )}
//         </div>
//     );
// };

// const TechGridBox = {
//     AsIs,
//     ToBe
// };

// export default TechGridBox;
