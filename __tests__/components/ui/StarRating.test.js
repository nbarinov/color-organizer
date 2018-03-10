import StarRating from '../../../source/components/ui/StarRating';

const { mount, shallow } = Enzyme;

describe("<StarRating /> UI Component", () => {
    let wrapper;
    
    describe("Rendering the UI", () => {
        beforeAll(() => wrapper = mount(<StarRating starsSelected={4} totalStars={7} />));

        it("renders a div with the class .star-rating", () =>
            expect(
                wrapper
                    .find('div.star-rating')
                    .length
            ).toEqual(1)
        ); 

        it("renders parental className stars", () =>
            expect(
                shallow(<StarRating className="parant__star-rating" starsSelected={4} totalStars={7} />)
                    .find('div.parant__star-rating.star-rating')
                    .length
            ).toBe(1)
        );

        it("renders the correct number of selected stars", () =>
            expect(
                wrapper
                    .find('div.star--selected')
                    .length
            ).toEqual(4)
        );

        it("renders the correct number of stars", () =>
            expect(
                wrapper
                    .find('div.star')
                    .length
            ).toEqual(7)
        );

        it("has only one paragraph node", () =>
            expect(
                wrapper
                    .find('p.star-rating__total')
                    .length
            ).toEqual(1)
        );

        it("displays {rating} of {total} stars", () =>
            expect(
                wrapper
                    .find('p.star-rating__total')
                    .text()
            ).toEqual("4 of 7")
        );

        it("rating does cause error", () => {
            wrapper
                .find('div.star-rating__stars')
                .childAt(3)
                .simulate('click');
        });
    });

    describe("Changing the Rating", () => {
        let _rate = jest.fn();

        afterEach(() => _rate.mockReset())
        beforeAll(() => wrapper = mount(<StarRating onRate={_rate} />))

        it("invokes onRate Function", () => {
            wrapper.find('div.star-rating__stars').childAt(3).simulate("click");
            expect(_rate.mock.calls.length).toEqual(1);
        });

        it("passes the correct rating", () => {
            wrapper.find('div.star-rating__stars').childAt(1).simulate("click");
            expect(_rate.mock.calls[0][0]).toEqual(2);
        });
    });
});