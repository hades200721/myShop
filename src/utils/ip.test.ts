import {checkIpAddress} from './ip';

describe('Examine is valid ip address function', () => {
    test('ip with characters', () => {
        expect(checkIpAddress('192.f22.b22.22')).toBe(false);
    })
    test('ip without dots', () => {
        expect(checkIpAddress('235529359200')).toBe(false);
    })
    test('two dots in a row', () => {
        expect(checkIpAddress('202.190.51..44')).toBe(false);
    })
    test('valid ip address', () => {
        expect(checkIpAddress('140.77.23.59')).toBe(true);
    })
});