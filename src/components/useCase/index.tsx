import { useGlobalContext } from '../../context/globalContext';
import { ContentBox, IUseCaseTpy1, PointBox } from './style';

const UseCase = ({ data }: { data: IUseCaseTpy1 }) => {
    const { lang } = useGlobalContext();

    return (
        <ContentBox $lang={lang}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="case-number">use cases {data.index}</div>
                <div style={{ height: '8px' }} />
                <div className="title">{data.title}</div>
                <div style={{ height: '16px' }} />
                <div className="desc">{data.desc}</div>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'center' }}>
                {data.list.map((info) => (
                    <PointBox key={info.title} $lang={lang}>
                        <div className="title-box">{info.title}</div>
                        <div className="desc-box">
                            <div style={{ width: '100%', paddingRight: '25px', textAlign: 'center' }}>{info.desc}</div>
                        </div>
                    </PointBox>
                ))}
            </div>
        </ContentBox>
    );
};

export default UseCase;
