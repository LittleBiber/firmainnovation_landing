import { ICoreValue } from '../..';

const CoreValue = {
    title: 'CORE VALUE PROPOSITIONS',
    list: [
        {
            title: '효율성',
            desc: `계약 작성, 협상, 관리의\n주요 프로세스를 자동화하여\n시간과 비용을 절감합니다.`
        },
        {
            title: '신뢰와 보안',
            desc: `블록체인을 통해 위변조 방지\n및 투명한 기록을 보장하여\n신뢰를 강화합니다.`
        },
        {
            title: '접근성',
            desc: `비전문가도 LLM 기반 인터\n페이스와 추천 기능을 통해\n복잡한 계약을 쉽게 작성할 수\n있도록 합니다.`
        },
        {
            title: '확장성',
            desc: `품질을 희생하지 않고\n대규모 계약을 관리할 수\n있도록 지원합니다.`
        },
        {
            title: '적응성',
            desc: `동적인 비즈니스 환경과 규제 변화에 유연하게 대응하는\n계약 솔루션을 제공합니다.`
        }
    ]
} satisfies ICoreValue;

export default CoreValue;
