import Color from '../../../source/components/ui/Color';

const { shallow } = Enzyme;

describe("<Color /> UI Component", () => {
    it("Renders correct properties", () => {
        let output = shallow(
            <Color title="Test Color"
                   color="#f0f0f0"
                   rating={3}
                   timestamp="Mon Apr 11 2016 12:54:19 GMT-0700 (PDT)" />
        ).html();

        expect(output).toMatchSnapshot();
    });
});