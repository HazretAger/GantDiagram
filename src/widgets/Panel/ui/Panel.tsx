import { useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import PrevArrow from '@/shared/assets/icons/arrowNext.svg?react';
import NextArrow from '@/shared/assets/icons/arrowPrev.svg?react';
import 'split-pane-react/esm/themes/default.css';
import cls from './Panel.module.scss';

export const Panel = () => {
    const [sizes, setSizes] = useState([50, 50]);

    const rightSideHandler = () => {
        setSizes(([leftSize, rightSize]) => {
            if (leftSize === 100) {
                return [leftSize, rightSize];
            } else {
                return [leftSize + 50, rightSize - 50];
            }
        });
    };

    const leftSideHandler = () => {
        setSizes(([leftSize, rightSize]) => {
            if (rightSize === 100) {
                return [leftSize, rightSize];
            } else {
                return [leftSize - 50, rightSize + 50];
            }
        });
    };

    return (
        <div className={cls.Panel}>
            {/*@ts-ignore */}
            <SplitPane split="vertical" sizes={sizes} onChange={setSizes}>
                <Pane maxSize="100%">
                    <div className={cls.LeftSide}>
                        <div className={`${cls.ResizeButton} ${cls.LeftPanelButton}`} onClick={leftSideHandler}>
                            <NextArrow />
                        </div>
                        <div className={cls.Content}>Pane1</div>
                    </div>
                </Pane>
                <Pane maxSize="100%">
                    <div className={cls.RightSide}>
                        <div className={`${cls.ResizeButton} ${cls.RightPanelButton}`} onClick={rightSideHandler}>
                            <PrevArrow />
                        </div>
                        <div className={cls.Content}>Pane2</div>
                    </div>
                </Pane>
            </SplitPane>
        </div>
    );
};
