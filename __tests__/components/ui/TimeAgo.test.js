import TimeAgo from '../../../source/components/ui/TimeAgo';

const { shallow } = Enzyme;
const timestamp = "Sun Apr 10 2016 12:54:19 GMT-0700 (PDT)";

describe("<TimeAgo /> UI Component", () => {
    it("renders default timeago", () =>
        expect(
            shallow(<TimeAgo timestamp={timestamp} />)
                .find('div.time-ago')
                .length
        ).toBe(1)
    );

    it("renders parental className timeago", () =>
        expect(
            shallow(<TimeAgo timestamp={timestamp} className="parent__time-ago" />)
                .find('div.parent__time-ago.time-ago')
                .length
        ).toBe(1)
    );
});