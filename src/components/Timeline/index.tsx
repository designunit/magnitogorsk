import { SectionParalaxedBack } from '../SectionParalaxedBack'
import s from './styles.module.css'
import { Title } from '../Title'
import Image from 'next/image'

const data = [
    {
        date: 'График проекта:',
        text: '',
    },
    {
        date: 'Март – апрель 2022 года',
        text: 'комплексная оценка территории и проведение социологического исследования',
    },
    {
        date: 'Май - июнь 2022 года ',
        text: 'проведение стратегической сессии и формирование предложений развития',
    },
    {
        date: 'Июль – август 2022 года',
        text: 'детализация проектных решений',
    },
    {
        date: 'Сентябрь 2022 года',
        text: 'представление проекта Мастер-плана развития города Менделеевска',
    },
]

export const Timeline = () => {
    return (
        <>
            <SectionParalaxedBack
                contentStyle={{
                    width: '100%',
                    height: '100%',
                    flex: '1 0 100%',
                    display: 'flex',
                }}
                back={(
                    <>
                        <Image
                            src='/static/timeline.jpg'
                            layout='fill'
                            objectFit='cover'
                            quality={90}
                        />
                        {/* <div style={{
                            height: '100%',
                            background: '#D04E29',
                        }} /> */}
                    </>
                )}
            >
                <div
                    className={s.numContainer}
                >
                    {data.map((x, i) => (
                        <div className={s.itemContainer}>
                            <div className={s.lines}>
                                <div className={s.hor} />
                                <div className={s.vert} />
                            </div>
                            <div
                                key={i}
                                className={s.item}
                            >
                                <div>
                                    {x.date}
                                </div>
                                <div>
                                    {x.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionParalaxedBack>
        </>
    )
}