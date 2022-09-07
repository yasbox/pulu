/* import {
    Default,
} from '@/components/CardDesign' */



const Index = ({ card, DesignName = 'Default' }) => {

    /* const DesignComponent = dynamic(() =>
        import('@/components/CardDesign').then((mod) => mod[DesignName])
    ) */

    const DesignComponent = dynamic(() =>
        import('@/components/CardDesign/' + DesignName).then((mod) => mod[DesignName])
    )

    return (
        <DesignComponent
            card={card}
        ></DesignComponent>
    )
}

/* const Index = ({ card, DesignName = 'Default' }) => (
    
    <DesignName
        card={card}
    ></DesignName>
) */

export default Index
