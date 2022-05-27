import s from './styles.module.css'
import Image from 'next/image'
import urbanika from '/public/static/urbanika.svg'
import unit from '/public/static/unit.svg'
import tatrstan from '/public/static/tatrstan.svg'
import mendeleevsk from '/public/static/mendeleevsk.png'


export const Footer: React.FC = props => {
    return (
        <footer className={s.footer}>
            <div className={s.items}>
                <div className={s.item}>
                    <Image
                        src={tatrstan}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Республика Татарстан
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={mendeleevsk}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        ИСПОЛНИТЕЛЬНЫЙ КОМИТЕТ <br />
                        МЕНДЕЛЕЕВСКОГО МУНИЦИПАЛЬНОГО РАЙОНА
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={urbanika}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Институт территориального планирования
                    </div>
                </div>
                <div className={s.item}>
                    <Image
                        src={unit}
                        objectFit='contain'
                    />
                    <div className={s.text}>
                        Проектная студия<br />
                        дизайн юнит 4
                    </div>
                </div>
            </div>

            {/* <hr />
            <div className={`${s.text}`}>
                <Button
                    href={'https://unit4.io'}
                    theme={'link'}
                >
                    ©2022 design : : unit 4
                </Button>
            </div> */}
        </footer>
    )
}