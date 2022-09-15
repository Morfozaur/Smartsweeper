import React from 'react';

const Avatar = () => {
    const pattern = [
        'xxxxxxxxxxxxxxxxxxxx',
        'xxxxxpppppppplpxxxxx',
        'xxxxxpppppppplpxxxxx',
        'xxxppppppppppppppxxx',
        'xxxppppppppppppppxxx',
        'xxxbbbbffffffbbbbxxx',
        'xxxbdddddffdddddbxxx',
        'xxxhdfwfdhhdwffdhxxx',
        'xxxfdfhwdffdhwfdfxxx',
        'xxxfdfffdffdfffdfxxx',
        'xxxfdddddffdddddfxxx',
        'xxxbffffffffffffxxxx',
        'xxxbffffsfffffffxxxx',
        'xxxbbffffssffffxxxxx',
        'xxbbxxffffffffxxxxxx',
        'xxbxxxxxttttxxxxxxxx',
        'xbxxyttttttttttyxxxx',
        'xxxtyyttttttttyytxxx',
        'xxxtyyyttttttyyytxxx',
        'xxxtyyyyttttyyyytxxx',

    ]

    const colors = {
        x: 'blank',
        w: 'white',
        p: 'pink',
        l: 'pinky',
        b: 'brown',
        h: 'shady',
        d: 'dark',
        s: 'salmon',
        f: 'face',
        t: 'tan',
        y: 'yellow',
    }
    return (
        <div className={'hexplorist__avatar'}>
            <div className={'hexplorist__image'}>
                {pattern.map((row,idx) => {
                    return <div key={`avRow-${idx}`} className={'hexplorist__row '}>
                        {row.split('').map((px,idxPx) => {
                            return <div key={`avPR-${idx}${idxPx}`}
                                        className={`hexplorist__pixel hexplorist__pixel--${colors[px]}`}/>
                        })}
                    </div>
                })}
            </div>
            <div className="hexplorist__description">
                <p className='hexplorist__text'>Hexplorist is waiting for brave Hexplorers!</p>
                <p className='hexplorist__text hexplorist__text--small'>
                    Explore distant lands, fight with wild animals, search for treasures and become famous!
                </p>
                <p className='hexplorist__text'>FALL <span className='hexplorist__text hexplorist__text--marked'>2022</span></p>
            </div>
        </div>
    );
}

export default Avatar;