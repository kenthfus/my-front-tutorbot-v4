import React, {useState, useRef, useEffect} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";

const Scheduler = () => {

  const [resources, setResources] = useState([]);
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [days, setDays] = useState(365);

  const [scheduler, setScheduler] = useState(null);

  const config = {
    timeHeaders: [
      {groupBy: "Month"},
      {groupBy: "Day", format: "d"}
    ],
    scale: "Day",
    cellWidth: 50,
    durationBarVisible: false,
    rowMarginTop: 3,
    rowMarginBottom: 3,

    treeEnabled: true,
    rowHeaderColumns: [
      {name: "Schedule"},
      {name: "Classes", display: "classes", width: 50},
      {name: "Notes", display: "notes", width: 50},
      {name: "AI Summaries", display: "aisummaries", width: 90},
    ],
    onEventMoved: args => {
      console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
      scheduler.message("Event moved: " + args.e.data.text);
    },
    onEventResized: args => {
      console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
      scheduler.message("Event resized: " + args.e.data.text);
    },
    onTimeRangeSelected: async args => {
      const modal = await DayPilot.Modal.prompt("New event name", "Event");
      scheduler.clearSelection();
      if (!modal.result) {
        return;
      }
      scheduler.events.add({
        id: DayPilot.guid(),
        text: modal.result,
        start: args.start,
        end: args.end,
        resource: args.resource
      });
    },
    onBeforeRowHeaderRender: args => {
      if (args.row.data.image) {
        args.row.columns[0].areas = [
          {
            left: 10,
            top: 8,
            width: 24,
            height: 24,
            image: "/icons/" + args.row.data.image,
            style: "border-radius: 50%; overflow: hidden;"
          }
        ]
      }
    },
    onBeforeEventRender: args => {
      if (!args.data.backColor) {
        args.data.backColor = "#93c47d";
      }
      args.data.borderColor = "darker";
      args.data.fontColor = "white";

      args.data.areas = [
        {
          right: 4,
          top: 6,
          width: 24,
          height: 24,
          padding: 2,
          fontColor: "#ffffff",
          symbol: "icons/daypilot.svg#threedots-v",
          action: "ContextMenu",
          style: "border-radius: 50%; cursor: pointer;",
        }
      ];

      if (args.data.locked) {
        args.data.areas.push({
          right: 26,
          top: 6,
          width: 24,
          height: 24,
          padding: 4,
          fontColor: "#ffffff",
          symbol: "icons/daypilot.svg#padlock",
          style: "border-radius: 50%",
          onClick: async args => {
            const modal = await DayPilot.Modal.confirm("Do you really want to unlock this reservation?");
            if (modal.canceled) {
              return;
            }
            toggleEventLock(args.source);
          }
        });

        args.data.moveDisabled = true;
        args.data.resizeDisabled = true;
        args.data.clickDisabled = true;
        args.data.deleteDisabled = true;
      }

    },
    onRowFilter: args => {
      if (!args.filter) {
        return;
      }
      if (args.filterParam.seats) {
        args.visible = args.row.data.seats === args.filterParam.seats;
      }
    },
    contextMenu: new DayPilot.Menu({
      items: [
        {
          text: "Delete",
          onClick: async args => {
            const modal = await DayPilot.Modal.confirm("Do you really want to delete this event?");
            if (modal.canceled) {
              return;
            }
            scheduler.events.remove(args.source);
          }
        },
        {
          text: "Lock",
          onClick: args => {
            toggleEventLock(args.source);
          }
        }
      ],
      onShow: args => {
        const e = args.source;
        const locked = e.data.locked;

        // update the lock/unlock text
        args.menu.items[1].text = locked ? "Unlock" : "Lock";

        // disable actions for locked
        args.menu.items[0].disabled = locked;
      }
    })
  };

  const toggleEventLock = (e) => {
    e.data.locked = !e.data.locked;
    scheduler.events.update(e);
  };

  const applyFilter = (value) => {
    const seats = parseInt(value, 10);
    if (!seats) {
      scheduler.rows.filter(null);
      return;
    }
    scheduler.rows.filter({seats: seats});
  };

  const loadData = (args) => {
    const resources = [
      {
        name: "UBC University", id: "G2", expanded: true, children: [
          {name: "Attend video conf", classes: 4, notes: 2, aisummaries: "Automatic", id: "A", image: "video_24x24.png"},
          {name: "Meeting with Prof. Wong", classes: 4, notes: 2, aisummaries: "Automatic", id: "B", image: "ubc_24x30.png"},
          {name: "Conf call with SFU", classes: 4, notes: 2, aisummaries: "Automatic", id: "C", image: "audio_24x24.png"},
          {name: "Computer class lecture", classes: 2, notes: 2, aisummaries: "Automatic", id: "D", image: "ubc_24x30.png"},
        ]
      },
      {
        name: "Tutorbot", id: "G1", expanded: true, children: [
          {name: "Zoom with tutorbot", classes: 5, notes: 4, aisummaries: "Automatic", id: "E", image: "tutorbot_24x18.png"},
          {name: "Attend AI mock exam", classes: 5, notes: 4, aisummaries: "Automatic", id: "F", image: "audio_24x24.png"},
          {name: "Zoom with tutorbot", classes: 5, notes: 4, aisummaries: "Automatic", id: "G", image: "tutorbot_24x18.png"},
        ]
      },
    ];
    setResources(resources);

    const events = [
      {
        id: 101,
        text: "Reservation 101",
        start: "2025-11-02T00:00:00",
        end: "2025-11-05T00:00:00",
        resource: "A"
      },
      {
        id: 102,
        text: "Reservation 102",
        start: "2025-11-06T00:00:00",
        end: "2025-11-10T00:00:00",
        resource: "A"
      },
      {
        id: 103,
        text: "Reservation 103",
        start: "2025-11-03T00:00:00",
        end: "2025-11-10T00:00:00",
        resource: "C",
        backColor: "#6fa8dc",
        locked: true
      },
      {
        id: 104,
        text: "Reservation 104",
        start: "2025-11-02T00:00:00",
        end: "2025-11-08T00:00:00",
        resource: "E",
        backColor: "#f6b26b",
        plus: true
      },
      {
        id: 105,
        text: "Reservation 105",
        start: "2025-11-03T00:00:00",
        end: "2025-11-09T00:00:00",
        resource: "G",
      },
      {
        id: 106,
        text: "Reservation 106",
        start: "2025-11-02T00:00:00",
        end: "2025-11-07T00:00:00",
        resource: "B",
      }
    ];
    setEvents(events);
  }

  useEffect(() => {
    loadData();
    scheduler?.scrollTo("2025-11-01");
  }, [scheduler]);

  return (
    <div>
      <div className="toolbar">
        Filter by classes:
        &nbsp;
        <select onChange={ev => applyFilter(ev.currentTarget.value)}>
          <option value="0">All</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <DayPilotScheduler
        {...config}
        startDate={startDate}
        days={days}
        events={events}
        resources={resources}
        controlRef={setScheduler}
      />
    </div>
  );
}

export default Scheduler;