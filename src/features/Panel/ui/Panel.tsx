import { useCallback, useState } from 'react';
import SplitPane, { Pane } from 'split-pane-react';
import PrevArrow from '@/shared/assets/icons/arrowNext.svg?react';
import NextArrow from '@/shared/assets/icons/arrowPrev.svg?react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState } from 'react-flow-renderer';
import 'split-pane-react/esm/themes/default.css';
import cls from './Panel.module.scss';

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const Panel = () => {
    const [sizes, setSizes] = useState([50, 50]);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

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

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

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
                        <div className={cls.Content}>
                            <ReactFlow
                                nodes={nodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onEdgesChange={onEdgesChange}
                                onConnect={onConnect}
                            />
                        </div>
                    </div>
                </Pane>
            </SplitPane>
        </div>
    );
};
