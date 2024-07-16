import {Timer} from './timer';
import {mockIPInLoad, mockIPWithData} from '../test/__mocks__/fileMock';

describe('Examine timer util function', () => {
    test('shouldTickTimer - false, when loading', () => {
        expect(Timer.shouldTickTimer(mockIPInLoad)).toBe(false);
    })

    test('shouldTickTimer = true, when data and not loading', () => {
        expect(Timer.shouldTickTimer(mockIPWithData)).toBe(true);
    })
    test('updateCurrentTime - add 1 second to 23:59:59', () => {
        expect(Timer.updateCurrentTime('23:59:59')).toBe('00:00:00');
    })
    test('updateCurrentTime = true, when data and not loading', () => {
        expect(Timer.updateCurrentTime('22:51:44')).toBe('22:51:45');
    })
    test('updateCurrentTime = true, when data and not loading', () => {
        expect(Timer.updateCurrentTime('14:23:59')).toBe('14:24:00');
    })
});