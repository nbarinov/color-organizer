import C from '../../../source/constants';
import { sort } from '../../../source/store/reducers';
import deepFreeze from 'deep-freeze';

describe("sort Reducer", () => {
    it("SORT_COLORS success", () => {
        const state = "SORTED_BY_TITLE";
        const action = {
            type: C.SORT_COLORS,
            sortBy: 'SORTED_BY_RATING',
        };
        const results = sort(state, action);

        deepFreeze(state);
        deepFreeze(action);

        expect(results)
            .toEqual("SORTED_BY_RATING");
    });

    it("Default string for incorrent action", () =>
        expect(sort()).toEqual("SORTED_BY_DATE")
    );
});