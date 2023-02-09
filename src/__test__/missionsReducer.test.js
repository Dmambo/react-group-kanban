import missionsReducer, { fetchMissions, toggleJoinMissions } from '../redux/missionSlice/missionsReducer';

describe('missionsReducer', () => {
  it('should return the initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual({
      missions: [],
    });
  });

  it('should handle fetchMissions', () => {
    expect(
      missionsReducer(
        {
          missions: [],
        },
        {
          type: fetchMissions.fulfilled,
          payload: [
            {
              mission_name: 'missionName',
              mission_id: 'missionId',
              description: 'description',
              reserved: false,
            },
          ],
        },
      ),
    ).toEqual({
      missions: [],
    });
  });

  it('should handle toggleJoinMissions', () => {
    expect(
      missionsReducer(
        {
          missions: [
            {
              mission_name: 'missionName',
              mission_id: 'missionId',
              description: 'description',
              reserved: false,
            },
          ],
        },
        {
          type: toggleJoinMissions.type,
          payload: 'missionId',
        },
      ),
    ).toEqual({
      missions: [
        {
          mission_name: 'missionName',
          mission_id: 'missionId',
          description: 'description',
          reserved: false,
        },
      ],
    });
  });
});
