/**
 * 
 * @authors Zhao zhao
 * @date    2018-01-24 17:03:29
 * @version $Id$
 */

(function ($, undefined) {
	$.timeAxis = function (options, element) {
		this.$el = $(element);
		this._init(options);

	};

	$.timeAxis.defaults = {
		speed: 200,
		vis: 8,
		prev: ".sPrev",
		next: ".sNext",
		active: ".act"
	};

	$.timeAxis.prototype = {
		_init: function (options) {
			this.options = $.extend(true, {}, $.timeAxis.defaults, options);
			this.$wrapper = this.$el;
			this.$ul = this.$wrapper.find('ul')
			this.$items = this.$ul.find('li');
			this.itemsCount = this.$items.length;
			this.itemsWidth = this.$items.eq(0).outerWidth(true);

			this.$Prev = this.$wrapper.find(this.options.prev);
			this.$Next = this.$wrapper.find(this.options.next);
			this.$vis = this.options.vis;
			this.$active = this.options.active;

			this._layout();

			this._loadEvents();
		},

		_layout: function () {
			this.$ul.width(this.itemsWidth * this.itemsCount);
		},

		_loadEvents: function () {
			var _self = this;
			this.$Prev.on('click', function () {
				_self._slide();
				return false;
			});
			this.$Next.on('click', function () {
				_self._slide();
				return false;
			});
		},

		_slide: function () {
			var _self = this,
				index = _self.$ul.find(_self.$active).index(),
				toLeft = index - (_self.$vis - 1);
			if (toLeft > 0) {
				_self._move((-1) * toLeft * _self.itemsWidth);
			} else if (toLeft == -(_self.$vis - 1)) {
				_self._move(0);
			}
		},

		_move: function (distance) {
			var _self = this;
			_self.$ul.animate({
				left: distance
			}, _self.options.speed);
		}


	};



	$.fn.timeAxis = function (options) {
		this.each(function () {
			var instance = $.data(this, 'timeAxis');
			if (!instance) {
				$.data(this, 'timeAxis', new $.timeAxis(options, this));
			}
		});
		return this;

	};

})(jQuery);