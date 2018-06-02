import Lane from '../models/lane';
import Note from '../models/note';

import uuid from 'uuid';

export function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  const newLane = new Lane(req.body);

  newLane.notes = [];

  newLane.id = uuid();
  newLane.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

export function getLanes(req, res) {
  Lane.find().exec((err, lanes) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes });
  });
}

export function deleteLane(req, res) {
  Lane.findOneAndRemove({ id: req.params.laneId }).exec((err, lane) => {
    if (err) {
      res.status(500).send(err);
    }

    lane.notes.map((noteId) => {
      Note.findOneAndRemove({ _id: noteId }).exec((err) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).end();
      });
    });
  });
}

export function updateLane(req, res) {
  Lane.findOneAndUpdate({ id: req.params.laneId }, req.body, { new: true }, (err, lane) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(lane);
  });
}
