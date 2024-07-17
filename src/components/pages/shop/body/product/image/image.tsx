import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Blank} from './blank';
import {Loading} from './loading';
import {StyledImageContainer, StyledImage} from './style';
import {IImageProps} from './interface';

export const Image: React.FC<IImageProps> = React.memo(({description, thumbnailUrl}) => {
    const [loaded, setLoaded] = useState(false);
    const [noImage, setNoImage] = useState(false);

    const imageElm = useRef<HTMLImageElement>(null);

    const onLoad = useCallback((ref: React.BaseSyntheticEvent) => {
        if (ref.currentTarget && ref.currentTarget.complete) {
            setLoaded(true);
        }
    }, []);

    const onError = useCallback(() => {
        setLoaded(true);
        setNoImage(true);
    }, []);

    const imageToRender = useMemo(() => {
        switch (true) {
            case noImage: {
                return <Blank/>
            }
            default: {
                return (
                    <StyledImage
                        ref={imageElm}
                        loading="lazy"
                        src={thumbnailUrl}
                        onLoad={onLoad}
                        onError={onError}
                        alt={description}
                        title={description}
                    />);
            }
        }
    }, [noImage, loaded]);

    return (
        <StyledImageContainer>
            {imageToRender}
        </StyledImageContainer>
    );
});
