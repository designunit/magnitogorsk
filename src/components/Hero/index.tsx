import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'
import gerb from '/public/static/maingerb.svg'
import hero from '/public/static/hero.jpg'
import classNames from 'classnames'

export const Hero: React.FC<any> = ({ openModal }) => {
    const { mapUrl } = useContext(ConfigContext)
    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src={hero}
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                    quality={100}
                />
            )}
            contentStyle={{
                width: '100%',
                paddingTop: '5rem',
            }}
        >
            <div className={s.top}>
                <div className={s.titleLine}>
                    <Title>
                        Мастер-план развития Менделеевска
                        <span style={{
                            fontSize: '1.25em',
                            lineHeight: '1.25em'
                        }}>
                        </span>
                    </Title>
                </div>
            </div>

            <span className={s.heroSubtitle}>
                <div className={s.description}>
                    <p>
                        Приветствуем вас на сайте, посвящённом разработке мастер-плана развития города Менделеевска.
                    </p>
                    <p>
                        Это платформа для обсуждения вместе с горожанами, экспертами, предпринимателями, представителями культурных и образовательных учреждений как развивать Менделеевск.
                    </p>
                    <p>
                        Мастер-план развития города Менделеевска – это документ стратегического планирования территории, разрабатываемый на стыке социально-экономического развития и пространственного.
                    </p>
                    <p>
                        Чем больше жителей Менделеевска предложит свои идеи и предложения по улучшению жизни в своем городе, или, наоборот, озвучит его актуальные проблемы – тем более реализуемым и полезным для каждого жителя получится итоговый документ.
                    </p>
                    <p>
                        Если вы хотите сделать свой город лучше, расскажите, что вы хотите изменить? Потратьте всего пару минут, заполните анкету и отметьте на карте Менделеевска то, что вас волнует и беспокоит.
                    </p>
                </div>
            </span>

            <div className={s.heroButtons}>
                <Button
                    href={mapUrl}
                    size='big'
                >
                    Карта идей
                </Button>
                <div className={s.buttonsSpacer} />
                <Button
                    size='big'
                    theme={'primary'}
                    onClick={openModal}
                >
                    ПРОЙТИ ОПРОС
                </Button>
            </div>
        </SectionParalaxedBack>
    )
}