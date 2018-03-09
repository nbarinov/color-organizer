import C from '../../../source/constants';
import { color } from '../../../source/store/reducers';
import deepFreeze from 'deep-freeze';

describe("color Reducer", () => {
    it("ADD_COLOR success", () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
            id: 0,
            title: 'Test Teal',
            color: '#90f4d3',
            timestamp: new Date().toString(),
        };
        const results = color(state, action);

        deepFreeze(state);
        deepFreeze(action);
        
        expect(results)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90f4d3',
                timestamp: action.timestamp,
                rating: 0,
            })
    });

    it("RETE_COLOR success", () => {
        const state = {
            id: 0,
            title: 'Test Teal',
            color: '#90f4d3',
            timestamp: "Sat Mar 09 2018 15:42:09 GMT-0800 (PST)",
            rating: 0,
        };
        const action = {
            type: C.RATE_COLOR,
            id: 0,
            rating: 3,
        }
        const results = color(state, action);

        deepFreeze(state);
        deepFreeze(action);
        
        expect(results)
            .toEqual({
                id: 0,
                title: 'Test Teal',
                color: '#90f4d3',
                timestamp: "Sat Mar 09 2018 15:42:09 GMT-0800 (PST)",
                rating: 3,
            });
    });
});