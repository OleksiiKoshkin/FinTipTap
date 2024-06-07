import Image from '@tiptap/extension-image';

export const ImageResize = Image.extend({
    addOptions() {
        return {
            inline: true,
            allowBase64: true,
            HTMLAttributes: {
                class: 'tiptap-image-resize',
            }
        }
    },
    addAttributes() {
        return {
            src: {
                default: null,
            },
            alt: {
                default: null,
            },
            style: {
                default: 'cursor: pointer;',
                parseHTML: element => {
                    const width = element.getAttribute('width');
                    const height = element.getAttribute('height');
                    const cssText = element.style.cssText

                    return cssText.includes('width') ? cssText : `width: ${width}px; height: ${height ? height + 'px' : 'auto'};`
                },
            },
            title: {
                default: null,
            },
            loading: {
                default: null,
            },
            srcset: {
                default: null,
            },
            sizes: {
                default: null,
            },
            crossorigin: {
                default: null,
            },
            usemap: {
                default: null,
            },
            ismap: {
                default: null,
            },
            width: {
                default: null,
            },
            height: {
                default: null,
            },
            referrerpolicy: {
                default: null,
            },
            longdesc: {
                default: null,
            },
            decoding: {
                default: null,
            },
            class: {
                default: null,
            },
            id: {
                default: null,
            },
            name: {
                default: null,
            },
            draggable: {
                default: true,
            },
            tabindex: {
                default: null,
            },
            'aria-label': {
                default: null,
            },
            'aria-labelledby': {
                default: null,
            },
            'aria-describedby': {
                default: null,
            },
        };
    },
    addNodeView() {
        return ({node, editor, getPos}) => {
            const {
                view,
                options: {editable},
            } = editor;
            const {style} = node.attrs;

            const $wrapper = document.createElement('div');
            const $container = document.createElement('div');
            const $img = document.createElement('img');
            const iconStyle = 'width: 18px; height: 18px; cursor: pointer;';

            const dispatchNodeView = () => {
                if (typeof getPos === 'function') {
                    const newAttrs = {
                        ...node.attrs,
                        style: `${$img.style.cssText}`,
                    };
                    view.dispatch(view.state.tr.setNodeMarkup(getPos(), null, newAttrs));
                }
            };
            const selectedImageStyle = 'box-shadow: 0 0 0 1px #ffa600;';

            const paintPositionController = () => {
                const $positionController = document.createElement('div');

                const $leftController = document.createElement('img');
                const $centerController = document.createElement('img');
                const $rightController = document.createElement('img');

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const controllerMouseOver = (e) => {
                    e.target.style.opacity = 0.3;
                };

                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                const controllerMouseOut = (e) => {
                    e.target.style.opacity = 1;
                };

                $positionController.setAttribute(
                    'style',
                    'position: absolute; top: 0%; left: 50%; width: 80px; height: 20px; z-index: 999; background-color: rgba(255, 255, 255, 0.7); border-radius: 6px; border: 1px solid rgba(0,0,0,.5); cursor: pointer; transform: translate(-50%, -50%); display: flex; justify-content: space-between; align-items: center; padding: 0 6px;',
                );

                $leftController.setAttribute(
                    'src',
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTQsMjJIMlYyaDJWMjJ6IE0yMiw3SDZ2M2gxNlY3eiBNMTYsMTRINnYzaDEwVjE0eiIvPjwvc3ZnPg=='
                );
                $leftController.setAttribute('style', iconStyle);
                $leftController.addEventListener('mouseover', controllerMouseOver);
                $leftController.addEventListener('mouseout', controllerMouseOut);

                $centerController.setAttribute(
                    'src',
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBvbHlnb24gcG9pbnRzPSIxMSwyIDEzLDIgMTMsNyAyMSw3IDIxLDEwIDEzLDEwIDEzLDE0IDE4LDE0IDE4LDE3IDEzLDE3IDEzLDIyIDExLDIyIDExLDE3IDYsMTcgNiwxNCAxMSwxNCAxMSwxMCAzLDEwIDMsNyAxMSw3Ii8+PC9zdmc+',
                );
                $centerController.setAttribute('style', iconStyle);
                $centerController.addEventListener('mouseover', controllerMouseOver);
                $centerController.addEventListener('mouseout', controllerMouseOut);

                $rightController.setAttribute(
                    'src',
                    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCI+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgd2lkdGg9IjI0Ii8+PHBhdGggZD0iTTIwLDJoMnYyMGgtMlYyeiBNMiwxMGgxNlY3SDJWMTB6IE04LDE3aDEwdi0zSDhWMTd6Ii8+PC9zdmc+',
                );
                $rightController.setAttribute('style', iconStyle);
                $rightController.addEventListener('mouseover', controllerMouseOver);
                $rightController.addEventListener('mouseout', controllerMouseOut);

                $leftController.addEventListener('click', () => {
                    $img.setAttribute('style', `${$img.style.cssText} margin: 0 auto 0 0;`);
                    dispatchNodeView();
                });
                $centerController.addEventListener('click', () => {
                    $img.setAttribute('style', `${$img.style.cssText} margin: 0 auto;`);
                    dispatchNodeView();
                });
                $rightController.addEventListener('click', () => {
                    $img.setAttribute('style', `${$img.style.cssText} margin: 0 0 0 auto;`);
                    dispatchNodeView();
                });

                $positionController.appendChild($leftController);
                $positionController.appendChild($centerController);
                $positionController.appendChild($rightController);

                $container.appendChild($positionController);
            };

            $wrapper.setAttribute('style', `display: flex;`);
            $wrapper.appendChild($container);

            $container.setAttribute('style', `${style}`);
            $container.appendChild($img);

            Object.entries(node.attrs).forEach(([key, value]) => {
                if (value === undefined || value === null) return;
                $img.setAttribute(key, value);
            });

            if (!editable) return {dom: $img};

            const dotsPosition = [
                'top: -6px; left: -6px; cursor: nwse-resize;',
                'top: -6px; right: -6px; cursor: nesw-resize;',
                'bottom: -6px; left: -6px; cursor: nesw-resize;',
                'bottom: -6px; right: -6px; cursor: nwse-resize;',
            ];

            let isResizing = false;
            let startX: number, startWidth: number, startHeight: number;

            $container.addEventListener('click', () => {
                //remove remaining dots and position controller
                if ($container.childElementCount > 3) {
                    for (let i = 0; i < 5; i++) {
                        $container.removeChild($container.lastChild as Node);
                    }
                }

                paintPositionController();

                $container.setAttribute(
                    'style',
                    `position: relative; ${selectedImageStyle} ${style}`,
                    //`position: relative; border: 1px dashed #ffa600; ${style} cursor: pointer;`,
                );

                Array.from({length: 4}, (_, index) => {
                    const $dot = document.createElement('div');
                    $dot.setAttribute(
                        'style',
                        `position: absolute; width: 9px; background: #ffa600; height: 9px; border: 1.5px solid #6C6C6C; border-radius: 50%; ${dotsPosition[index]}`,
                    );

                    $dot.addEventListener('mousedown', e => {
                        e.preventDefault();
                        isResizing = true;
                        startX = e.clientX;
                        startWidth = $container.offsetWidth;
                        startHeight = $container.offsetHeight;

                        const onMouseMove = (e: MouseEvent) => {
                            if (!isResizing) return;
                            const deltaX = index % 2 === 0 ? -(e.clientX - startX) : e.clientX - startX;

                            const aspectRatio = startWidth / startHeight;
                            const newWidth = startWidth + deltaX;
                            const newHeight = newWidth / aspectRatio;

                            $container.style.width = newWidth + 'px';
                            $container.style.height = newHeight + 'px';

                            $img.style.width = newWidth + 'px';
                            $img.style.height = newHeight + 'px';
                        };

                        const onMouseUp = () => {
                            if (isResizing) {
                                isResizing = false;
                            }
                            dispatchNodeView();

                            document.removeEventListener('mousemove', onMouseMove);
                            document.removeEventListener('mouseup', onMouseUp);
                        };

                        document.addEventListener('mousemove', onMouseMove);
                        document.addEventListener('mouseup', onMouseUp);
                    });
                    $container.appendChild($dot);
                });
            });

            document.addEventListener('click', (e: MouseEvent) => {
                const $target = e.target as HTMLElement;
                const isClickInside = $container.contains($target) || $target.style.cssText === iconStyle;

                if (!isClickInside) {
                    const containerStyle = $container.getAttribute('style');
                    const newStyle = containerStyle?.replace(selectedImageStyle, '');
                    $container.setAttribute('style', newStyle as string);

                    if ($container.childElementCount > 3) {
                        for (let i = 0; i < 5; i++) {
                            $container.removeChild($container.lastChild as Node);
                        }
                    }
                }
            });

            return {
                dom: $wrapper,
            };
        };
    },
});