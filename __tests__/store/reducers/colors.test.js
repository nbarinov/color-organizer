import C from '../../../source/constants';
import { colors } from '../../../source/store/reducers';
import deepFreeze from 'deep-freeze';

describe("colors Reducer", () => {
    it("ADD_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'White',
                color: '#ffffff',
                timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                rating: 3
            }
        ];
        const action = {
            type: C.ADD_COLOR,
            id: 1,
            title: 'Black',
            color: '#000000',
            timestamp: new Date().toString(),
            rating: 0
        };
        const results = colors(state, action);

        deepFreeze(state);
        deepFreeze(action);

        expect(results)
            .toEqual([
                {
                    id: 0,
                    title: 'White',
                    color: '#ffffff',
                    timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                    rating: 3
                },
                {
                    id: 1,
                    title: 'Black',
                    color: '#000000',
                    timestamp: action.timestamp,
                    rating: 0
                }
            ]);
    });

    it("RATE_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'White',
                color: '#ffffff',
                timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                rating: 3
            }
        ];
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 4
        }
        const results = colors(state, action);

        deepFreeze(state);
        deepFreeze(action);

        expect(results)
            .toEqual([
                {
                    id: 0,
                    title: 'White',
                    color: '#ffffff',
                    timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                    rating: 4
                }
            ]);
    });

    it("REMOVE_COLOR success", () => {
        const state = [
            {
                id: 0,
                title: 'White',
                color: '#ffffff',
                timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                rating: 3
            },
            {
                id: 1,
                title: 'Black',
                color: '#000000',
                timestamp: 'Sat Mar 09 2018 16:13:09 GMT-0800 (PST)',
                rating: 0
            },
            {
                id: 2,
                title: 'Blue',
                color: '#0000ff',
                timestamp: 'Sat Mar 09 2018 16:14:09 GMT-0800 (PST)'
            }
        ];
        const action = {
            type: C.REMOVE_COLOR,
            id: 1
        };
        const results = colors(state, action);

        deepFreeze(state);
        deepFreeze(action);

        expect(results)
            .toEqual([
                {
                    id: 0,
                    title: 'White',
                    color: '#ffffff',
                    timestamp: 'Sat Mar 09 2018 16:12:09 GMT-0800 (PST)',
                    rating: 3
                },
                {
                    id: 2,
                    title: 'Blue',
                    color: '#0000ff',
                    timestamp: 'Sat Mar 09 2018 16:14:09 GMT-0800 (PST)'
                }
            ]);
    });

    it("Defaults array for incorrect action", () =>
        expect(colors()).toEqual([])    
    );
});