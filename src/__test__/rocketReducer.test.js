import rocketsReducer, { fetchRockets } from '../redux/rocketSlice/rocket';

describe('rocketsReducer', () => {
  it('should handle fetchRockets', () => {
    expect(
      rocketsReducer(
        {
          rockets: [],
        },
        {
          type: fetchRockets.fulfilled,
          payload: [
            {
              rocket_name: 'rocketName',
              rocket_id: 'rocketId',
              description: 'description',
              reserved: false,
            },
          ],
        },
      ),
    ).toEqual({
      rockets: [],
    });
  });

  it('should handle toggleJoinRockets', () => {
    expect(
      rocketsReducer(
        {
          rockets: [
            {
              rocket_name: 'rocketName',
              rocket_id: 'rocketId',
              description: 'description',
              reserved: false,
            },
          ],
        },
        {
          payload: 'rocketId',
        },
      ),
    ).toEqual({
      rockets: [
        {
          rocket_name: 'rocketName',
          rocket_id: 'rocketId',
          description: 'description',
          reserved: false,
        },
      ],
    });
  });
});
